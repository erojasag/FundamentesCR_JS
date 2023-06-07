const { DataTypes } = require('sequelize');
const argon2 = require('argon2');
const crypto = require('crypto');
const userType = require('./userType');
const db = require('../config/db');
const AppError = require('../utils/appError');

const User = db.define(
  'Users',
  {
    idUser: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    firstLastName: {
      type: DataTypes.STRING(100),
    },
    secondLastName: {
      type: DataTypes.STRING(100),
    },
    cedula: {
      type: DataTypes.STRING(15),
      unique: true,
      validate: {
        isNumeric: true,
        notEmpty: true,
        len: [9, 15],
      },
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    confirmPassword: {
      type: DataTypes.VIRTUAL,
      required: true,
      allowNull: true,
      validate: {
        passwordsMatch(confirmPassword) {
          if (this.password !== confirmPassword) {
            console.log(confirmPassword);
            throw new AppError('Las contraseñas no coinciden');
          }
        },
      },
    },
    idUserType: {
      type: DataTypes.UUID,
      references: {
        model: userType,
        key: 'IdUserType',
      },
      defaultValue: process.env.DEFAULT_ROLE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    passwordChangedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    passwordResetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passwordResetExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      select: false,
    },
  },
  {
    name: {
      singular: 'User',
      plural: 'Users',
    },
  }
);


User.beforeUpdate(async (user) => {
  const hashPassword = await argon2.hash(user.password);
  user.password = hashPassword;
  user.confirmPassword = hashPassword;
});

User.beforeUpdate(async (user) => {
  if (user.changed('password') || user.isNewRecord) {
    user.passwordChangedAt = Date.now() - 1000;
  }
});

User.beforeUpdate(async (user) => {
  if (user.changed()) {
    user.updatedAt = Date.now();
  }
});

User.addHook('beforeFind', (options) => {
  options.where = {
    ...(options.where || {}),
    active: true,
  };
  options.attributes = {
    exclude: [
      'IdUserType',
      'active',
      'passwordChangedAt',
      'createdAt',
      'updatedAt',
    ],
  };
  options.include = [
    {
      model: userType,
      as: 'UserType',
      attributes: ['Description'],
    },
  ];
});

User.checkPassword = async (candidatePassword, userPassword) => {
  return await argon2.verify(userPassword, candidatePassword);
};

User.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

User.createPasswordResetToken = function () {
  const token = crypto.randomBytes(32).toString('hex');
  return token;
};

User.belongsTo(userType, {
  foreignKey: 'IdUserType',
  as: 'UserType',
});

module.exports = User;
