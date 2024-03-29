USE FundamentesJS

/****** Object:  Table datetimeAspectosClinicos    Script Date: 04/07/2023 12:28:44 p. m. ******/
SET ANSI_NULLS ON

SET QUOTED_IDENTIFIER ON

CREATE TABLE AspectosClinicos(
	AspectoClinicoID VARCHAR(64) NOT NULL,
	IdeacionAutolesiones bit(64) NULL,
	PuntajeIdeacion int NULL,
	ObservacionesIdeacion nvarchar(255) NULL,
	PersonaSignificativa bit(64) NULL,
	PuntajePersonaSignificativa int NULL,
	ObservacionesPersonaSignificativa nvarchar(255) NULL,
	ViolenciaIntrafamiliar bit(64) NULL,
	PuntajeViolenciaIntrafamiliar int NULL,
	ObservacionesViolenciaIntrafamiliar nvarchar(255) NULL,
	ViolenciaSexual bit(64) NULL,
	PuntajeViolenciaSexual int NULL,
	ObservacionesViolenciaSexual nvarchar(255) NULL,
	ViolenciaPsicologica bit(64) NULL,
	PuntajeViolenciaPsicologica int NULL,
	ObservacionesViolenciaPsicologica nvarchar(255) NULL,
	ViolenciaFisicaFamiliar bit(64) NULL,
	PuntajeViolenciaFisicaFamiliar int NULL,
	ObservacionesViolenciaFisicaFamiliar nvarchar(255) NULL,
	PersonasPrivadasLibertad bit(64) NULL,
	PuntajePersonasPrivadasLibertad int NULL,
	ObservacionesPersonasPrivadasLibertad nvarchar(255) NULL,
	ConsumoDrogasFamilia bit(64) NULL,
	PuntajeConsumoDrogasFamilia int NULL,
	ObservacionesConsumoDrogasFamilia nvarchar(255) NULL,
	AbandonoFamiliar bit(64) NULL,
	PuntajeAbandonoFamiliar int NULL,
	ObservacionesAbandonoFamiliar nvarchar(255) NULL,
	RelacionEmocionesCuerpo bit(64) NULL,
	PuntajeRelacionEmocionesCuerpo int NULL,
	ObservacionesRelacionEmocionesCuerpo nvarchar(255) NULL,
	ResponsabilidadCuidadores bit(64) NULL,
	PuntajeResponsabilidadCuidadores int NULL,
	ObservacionesResponsabilidadCuidadores nvarchar(255) NULL,
	PuntajeTotal int NULL,
	Prioridad nvarchar(50) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	PRIMARY KEY (AspectoClinicoID)
	)



CREATE TABLE AspectosComunitarios(
	AspectoComunitarioId VARCHAR(64) NOT NULL,
	AltaVulnerabilidadViolencia bit(64) NULL,
	PuntajeAltaVulnerabilidadViolencia int NULL,
	ObservacionesAltaVulnerabilidadViolencia nvarchar(255) NULL,
	ReflexionEntorno bit(64) NULL,
	PuntajeReflexionEntorno int NULL,
	ObservacionesReflexionEntorno nvarchar(255) NULL,
	FormasRelacionarse bit(64) NULL,
	PuntajeFormasRelacionarse int NULL,
	ObservacionesFormasRelacionarse nvarchar(255) NULL,
	CuestionamientoNormas bit(64) NULL,
	PuntajeCuestionamientoNormas int NULL,
	ObservacionesCuestionamientoNormas nvarchar(255) NULL,
	PuntajeTotal int NULL,
	Prioridad nvarchar(50) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	Primary key (AspectoComunitarioId)
)


CREATE TABLE AspectosDesarrolloTalleres(
	AspectoDesarrolloTallerID VARCHAR(64) NOT NULL,
	comparteAnecdotas bit(64) NULL,
	ejerciciosGrupales bit(64) NULL,
	dialogoRespetuoso bit(64) NULL,
	reflexiona bit(64) NULL,
	seEquivoca bit(64) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	primary key (AspectoDesarrolloTallerID))


CREATE TABLE aspectosPsicoeducativos(
	aspectoPsicoeducativoId VARCHAR(64) NOT NULL,
	Permanencia bit(64) NULL,
	PuntajePermanencia int NULL,
	ObservacionesPermanencia nvarchar(255) NULL,
	RezagoEducativo bit(64) NULL,
	PuntajeRezago int NULL,
	ObservacionesRezago nvarchar(255) NULL,
	ExclusionEducativa bit(64) NULL,
	PuntajeExclusion int NULL,
	ObservacionesExclusion nvarchar(255) NULL,
	Dificultades bit(64) NULL,
	PuntajeDificultades int NULL,
	ObservacionesDificultades nvarchar(255) NULL,
	ApoyoFamiliar bit(64) NULL,
	PuntajeApoyo int NULL,
	ObservacionesApoyo nvarchar(255) NULL,
	ViolenciaEscolar bit(64) NULL,
	PuntajeViolencia int NULL,
	ObservacionesViolencia nvarchar(255) NULL,
	PuntajeTotal int NULL,
	Prioridad nvarchar(50) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	PRIMARY KEY (aspectoPsicoeducativoId))


CREATE TABLE casas(
	casaId VARCHAR(64) NOT NULL,
	nombreCasa varchar(255) NULL,
	canton varchar(100) NULL,
	provincia varchar(100) NULL,
	direccion varchar(255) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	PRIMARY KEY(casaId))



CREATE TABLE condicionesLaborales(
	condicionLaboralId VARCHAR(64) NOT NULL,
	trabajaActualmente bit NOT NULL,
	lugar varchar(150) NULL,
	ultimoempleo varchar(150) NULL,
	motivoAbandono varchar(250) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	PRIMARY KEY (condicionLaboralId))



CREATE TABLE datosMedicos(
	datosMedicosId VARCHAR(64) NOT NULL,
	alergias bit NOT NULL,
	consumo bit NOT NULL,
	embarazo bit NOT NULL,
	hijoshijas bit NOT NULL,
	expedienteHNP bit NOT NULL,
	situacionParticular varchar(250) NOT NULL,
	observaciones varchar(250) NOT NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	PRIMARY KEY (datosMedicosId))


CREATE TABLE dinamicasFamiliares(
	dinamicaFamiliarId VARCHAR(64) NOT NULL,
	privLibertad bit NULL,
	violenciaMujer bit NULL,
	violenciaFami bit NULL,
	acontecimientoRelev varchar(255) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
PRIMARY KEY (dinamicaFamiliarId))


CREATE TABLE encargados(
	encargadoId VARCHAR(64) NOT NULL,
	parentezco varchar(100) NULL,
	nombreCompleto varchar(250) NULL,
	fechaNacimiento date NULL,
	edad int NULL,
	nacionalidad varchar(50) NULL,
	cedula varchar(15) NULL,
	contacto varchar(100) NULL,
	escolaridad varchar(100) NULL,
	ocupacion varchar(100) NULL,
	condicionLaboral varchar(100) NULL,
	consumoMedicinas bit NULL,
	cualesMedicinas varchar(255) NULL,
	expedienteHNP varchar(100) NULL,
	situacionParticular varchar(100) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
PRIMARY KEY (encargadoId))



CREATE TABLE EncuestasSatisfaccion(
	encuestaSatisfaccionId VARCHAR(64) NOT NULL,
	nombreCompleto varchar(255) NOT NULL,
	edad int NOT NULL,
	cedula varchar(15) NOT NULL,
	calificacion int NOT NULL,
	recomendacion bit NOT NULL,
	comentarios varchar(255) NULL,
	createdAt datetime NULL,
	updatedAt datetime NULL,
PRIMARY KEY (encuestaSatisfaccionId))



CREATE TABLE escolaridades(
	escolaridadId VARCHAR(64) NOT NULL,
	inclusion bit NULL,
	expulsion bit NULL,
	tipoEducacion varchar(100) NULL,
	anoEscolar varchar(100) NULL,
	centroEducativo varchar(150) NULL,
	repitencia bit NULL,
	adecuacion bit NULL,
	ultimoAnoAprobado varchar(100) NULL,
	fechasalida varchar(100) NULL,
	motivosalida varchar(100) NULL,
	reinsercion bit NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	tipoAdecuacion varchar(255) NULL,
PRIMARY KEY (escolaridadId))


CREATE TABLE expedientes(
	expedienteId VARCHAR(64) NOT NULL,
	doctorId VARCHAR(64) NULL,
	pacienteId VARCHAR(64) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
PRIMARY KEY (expedienteId))


CREATE TABLE pacientes(
	pacienteId VARCHAR(64) NOT NULL,
	fechaNacimiento date NOT NULL,
	nombreCompleto varchar(250) NOT NULL,
	contacto varchar(20) NULL,
	edad int NOT NULL,
	cedula varchar(15) NULL,
	nacionalidad varchar(60) NOT NULL,
	distritoResidencia varchar(100) NOT NULL,
	direccion varchar(250) NOT NULL,
	genero varchar(250) NOT NULL,
	activo bit NOT NULL,
	casaId VARCHAR(64) NULL,
	datosMedicosId VARCHAR(64) NULL,
	condicionLaboralId VARCHAR(64) NULL,
	sociodemograficosId VARCHAR(64) NULL,
	encargadoId VARCHAR(64) NULL,
	dinamicaFamiliarId VARCHAR(64) NULL,
	PerfilEntradaId VARCHAR(64) NULL,
	PerfilSalidaId VARCHAR(64) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	escolaridadId VARCHAR(64) NULL,
	encuestaSatisfaccionId VARCHAR(64) NULL,
PRIMARY KEY (pacienteId),
FOREIGN KEY (casaId) REFERENCES casas(casaId),
FOREIGN KEY (datosMedicosId) REFERENCES datosMedicos(datosMedicosId),
FOREIGN KEY (condicionLaboralId) REFERENCES condicionesLaborales(condicionLaboralId),
FOREIGN KEY (sociodemograficosId) REFERENCES sociodemograficos(sociodemograficosId),
FOREIGN KEY (encargadoId) REFERENCES encargados(encargadoId),
FOREIGN KEY (dinamicaFamiliarId) REFERENCES dinamicasFamiliares(dinamicaFamiliarId),
FOREIGN KEY (PerfilEntradaId) REFERENCES perfilesEntrada(PerfilEntradaId),
FOREIGN KEY (PerfilSalidaId) REFERENCES perfilesSalida(PerfilSalidaId),
FOREIGN KEY (escolaridadId) REFERENCES escolaridades(escolaridadId),
FOREIGN KEY (encuestaSatisfaccionId) REFERENCES encuestasSatisfaccion(encuestaSatisfaccionId)
)




CREATE TABLE perfilesEntrada(
	PerfilEntradaId VARCHAR(64) NOT NULL,
	doctorId VARCHAR(64) NOT NULL,
	aspectoComunitarioId VARCHAR(64) NULL,
	aspectoClinicoId VARCHAR(64) NULL,
	aspectoPsicoeducativoId VARCHAR(64) NULL,
	aspectoDesarrolloTallerId VARCHAR(64) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
PRIMARY KEY (PerfilEntradaId),
FOREIGN KEY (doctorId) REFERENCES usuarios(usuarioId),
FOREIGN KEY (aspectoComunitarioId) REFERENCES aspectosComunitarios(aspectoComunitarioId),
FOREIGN KEY (aspectoClinicoId) REFERENCES aspectosClinicos(aspectoClinicoId),
FOREIGN KEY (aspectoPsicoeducativoId) REFERENCES aspectosPsicoeducativos(aspectoPsicoeducativoId),
FOREIGN KEY (aspectoDesarrolloTallerId) REFERENCES aspectosDesarrolloTalleres(aspectoDesarrolloTallerId)
)



CREATE TABLE perfilesSalida(
	perfilSalidaId VARCHAR(64) NOT NULL,
	doctorId VARCHAR(64) NOT NULL,
	AspectoComunitarioID VARCHAR(64) NULL,
	AspectoClinicoID VARCHAR(64) NULL,
	AspectoPsicoeducativoID VARCHAR(64) NULL,
	AspectoDesarrolloTallerId VARCHAR(64) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
PRIMARY KEY (perfilSalidaId),
FOREIGN KEY (doctorId) REFERENCES usuarios(usuarioId),
FOREIGN KEY (aspectoComunitarioId) REFERENCES aspectosComunitarios(aspectoComunitarioId),
FOREIGN KEY (aspectoClinicoId) REFERENCES aspectosClinicos(aspectoClinicoId),
FOREIGN KEY (aspectoPsicoeducativoId) REFERENCES aspectosPsicoeducativos(aspectoPsicoeducativoId),
FOREIGN KEY (aspectoDesarrolloTallerId) REFERENCES aspectosDesarrolloTalleres(aspectoDesarrolloTallerId)
)


CREATE TABLE roles(
	rolId VARCHAR(64) NOT NULL,
	nombreRol varchar(50) NOT NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	PRIMARY KEY (rolId)
	)

CREATE TABLE sociodemograficos(
	sociodemograficosId VARCHAR(64) NOT NULL,
	tipoVivienda varchar(250) NULL,
	habitantesHogar varchar(250) NULL,
	cantidadFamilias int NULL,
	cantidadHabitantes int NULL,
	electricidad bit NULL,
	aguaPotable bit NULL,
	celular varchar(20) NULL,
	internet bit NULL,
	cable bit NULL,
	recibeSubsidio bit NULL,
	institucion varchar(100) NULL,
	tipo varchar(100) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
PRIMARY KEY (sociodemograficosId))



CREATE TABLE usuarios(
	usuarioId VARCHAR(64) NOT NULL DEFAULT UUID(),
	nombre varchar(100) NULL,
	primerApe varchar(100) NULL,
	segundoApe varchar(100) NULL,
	email varchar(100) NOT NULL,
	contrasena varchar(100) NOT NULL,
	contrasenaResetExpires datetime NULL,
	contrasenaResetToken varchar(100) NULL,
	contrasenaChangedAt datetime NULL,
	activo bit NOT NULL,
	activationToken VARCHAR(64) NULL,
	rolId VARCHAR(64) NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	primary key (usuarioId)
) 

ALTER TABLE aspectosClinicos
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE aspectosComunitarios 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE aspectosDesarrolloTalleres 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE aspectosPsicoeducativos 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE casas 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE condicionesLaborales 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE datosMedicos 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE dinamicasFamiliares 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE encargados 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE encuestasSatisfaccion 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE escolaridades 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE expedientes 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE pacientes 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE perfilesEntrada 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE perfilesSalida 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE roles 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE sociodemograficos 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE usuarios 
MODIFY COLUMN createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;



/****** Object:  StoredProcedure datetimeGetAgeRangesWithCounts    Script Date: 04/07/2023 12:28:44 p. m. ******/
SET ANSI_NULLS ON

SET QUOTED_IDENTIFIER ON

CREATE PROCEDURE GetAgeRangesWithCounts()
BEGIN
    SELECT edad, COUNT(*) AS count
    FROM pacientes
    GROUP BY edad
    ORDER BY count DESC;
END;

CALL GetAgeRangesWithCounts() 




CREATE PROCEDURE GetStatsCasas()
BEGIN
	
	SELECT p.casaId, c.nombreCasa, COUNT(*) AS patientCount
	FROM pacientes p
	JOIN casas c ON p.casaId = c.casaId
	GROUP BY p.casaId, c.nombreCasa;
END

CALL GetStatsCasas() 

USE master

ALTER DATABASE FundamentesJS SET  READ_WRITE 


/*------------------------------------INSERTS-------------------------------------------------*/
-----------------------------INSERTS------------------------------------

-- Insert into roles table
INSERT INTO roles (rolId,nombreRol, updatedAt)
VALUES (UUID(),'Administrador', CURRENT_TIMESTAMP), (UUID(),'Psicologo', CURRENT_TIMESTAMP);

-- Insert into usuarios table
INSERT INTO usuarios (nombre, primerApe, segundoApe, email, contrasena, rolId, updatedAt)
VALUES ('User 1', 'Lastname 1', 'Lastname 1', 'user1@example.com', 'password1', (SELECT rolId FROM roles WHERE nombreRol = 'Administrador'), GETDATE()),
       ('User 2', 'Lastname 2', 'Lastname 2', 'user2@example.com', 'password2', (SELECT rolId FROM roles WHERE nombreRol = 'Psicologo'), GETDATE());

-- Insert into pacientes table
INSERT INTO pacientes (pacienteId, fechaNacimiento, cedula, nombreCompleto, contacto, edad, nacionalidad, distritoResidencia, direccion, genero, casaId, datosMedicosId, condicionLaboralId, sociodemograficosId, encargadoId, dinamicaFamiliarId, perfilEntradaId, perfilSalidaId, escolaridadId)
VALUES (UUID(),'2000-01-01', '123456789', 'Paciente 1', '123456789', 20, 'Costarricense', 'District 1', 'Address 1', 'masculino','37F3599E-A7BF-4D33-AEF6-2ECD81D6A334', 'ED5C52CD-4C90-4EB1-A37B-4B097D34D629','3E0F269D-8410-4705-95B7-6503EB779834','2B263590-12E1-11EE-9818-45B7632B44D8','2BF7AE96-B719-4958-96E9-1D3F2AE5E6AC', '569AF746-AEFD-462E-9E34-2A0077DF3F63', null, null, '6BB558F9-3005-4E8D-A28B-402A5E2F2127' );
-- Insert into datosMedicos table
INSERT INTO datosMedicos (datosMedicosId, alergias, consumo, embarazo, hijoshijas, expedienteHNP, situacionParticular, observaciones)
VALUES (UUID(),1, 0, 0, 1, 1, 'Situation 1', 'Observations 1'),
       (UUID(),0, 1, 0, 0, 1, 'Situation 2', 'Observations 2'),
       (UUID(),1, 0, 1, 1, 0, 'Situation 3', 'Observations 3');

-- Insert into escolaridad table
INSERT INTO escolaridades (escolaridadId ,inclusion, expulsion, tipoEducacion, anoEscolar, centroEducativo, repitencia, adecuacion, ultimoAnoAprobado, fechasalida, motivosalida, reinsercion)
VALUES
    ( UUID(),1, 0, 'Education 1', 'Year 1', 'Media', 1, 1, 'Last year 1', 'Exit date 1', 'Reason for exit 1', 1),
    ( UUID(),0, 1, 'Education 2', 'Year 2', 'Escuela', 1, 1, 'Last year 2', 'Exit date 2', 'Reason for exit 2', 1),
    ( UUID(),1, 0, 'Education 3', 'Year 3', 'Colegio', 1, 1, 'Last year 3', 'Exit date 3', 'Reason for exit 3', 1);

-- Insert into condicionesLaborales table
INSERT INTO condicionesLaborales (condicionLaboralId ,trabajaActualmente, lugar, ultimoempleo, motivoAbandono)
VALUES (UUID(),1, 'Workplace 1', 'Last job 1', 'Reason for leaving 1' ),
       (UUID(),0, 'Workplace 2', 'Last job 2', 'Reason for leaving 2'),
       (UUID(),1, 'Workplace 3', 'Last job 3', 'Reason for leaving 3');

-- Insert into sociodemograficos table
INSERT INTO sociodemograficos (sociodemograficosId ,tipoVivienda, habitantesHogar, cantidadFamilias, cantidadHabitantes, electricidad, aguaPotable, celular, internet, cable, recibeSubsidio, institucion, tipo)
VALUES (UUID(),'Housing type 1', 'Household inhabitants 1', 1, 5, 1, 1, 123456789, 1, 1, 0, 'Institution 1', 'Type 1'),
       (UUID(),'Housing type 2', 'Household inhabitants 2', 2, 10, 1, 1, 987654321, 0, 1, 1, 'Institution 2', 'Type 2'),
       (UUID(),'Housing type 3', 'Household inhabitants 3', 3, 15, 1, 1, 456789123, 1, 0, 0, 'Institution 3', 'Type 3');

-- Insert into encargados table
INSERT INTO encargados (encargadoId,parentezco, nombreCompleto, fechaNacimiento, edad, nacionalidad, cedula, contacto, escolaridad, ocupacion, condicionLaboral, consumoMedicinas, expedienteHNP, situacionParticular)
VALUES (UUID(),'Relation 1', 'Guardian 1', '1980-01-01', 40, 'Nationality 1', '123456789', 'Contact 1', 'Education 1', 'Occupation 1', 'Employment status 1', 1, 'HNP record 1', 'Situation 1'),
       (UUID(),'Relation 2', 'Guardian 2', '1990-02-02', 30, 'Nationality 2', '987654321', 'Contact 2', 'Education 2', 'Occupation 2', 'Employment status 2', 1, 'HNP record 2', 'Situation 2'),
       (UUID(),'Relation 3', 'Guardian 3', '2000-03-03', 20, 'Nationality 3', '456789123', 'Contact 3', 'Education 3', 'Occupation 3', 'Employment status 3', 1, 'HNP record 3', 'Situation 3');

-- Insert into dinamicaFamiliar table
INSERT INTO dinamicasFamiliares (dinamicaFamiliarId, privLibertad, violenciaMujer, violenciaFami, acontecimientoRelev )
VALUES (UUID(),1,1,1,1),
       (UUID(),1,1,1,1),
       (UUID(),1,1,1,1);

      
      
    ------------------------------------INSERT CASAS---------------------------  
INSERT INTO casas(casaId ,nombreCasa, canton, provincia, direccion)
VALUES(UUID(),'Casa Saint-Exupéry', 'Pavas', 'San Jose',  'Pueblo Nuevo'),
(UUID(),'Casa Camille Claudel', 'Pavas', 'San Jose', 'Finca San Juan'),
(UUID(),'Casa Metrópolis', 'Pavas', 'San Jose', 'Metrópolis 2'),
(UUID(), 'Casa Carmen Lyra', 'Pavas', 'San Jose', 'Bribri'),
(UUID(),'Casa El Triunfo','Pavas', 'San Jose', 'Metrópolis 2'),
(UUID(), 'Casa Carmen Lyra','Santa Ana', 'San Jose', 'Santa Ana'),
(UUID(), 'Casa Love And Unity','Cieneguita', 'Limón', 'Cieneguita'),
(UUID(),'Casa Yamipa','Sixaola', 'Limon','Sixaola'),
(UUID(),'Casa Wolaba Youth','Puerto Viejo','Limon', 'Talamanca'),
(UUID(),'Casa Iriria Ditsö Jú','Shiroles', 'Limon','Talamanca');


-- Inserts para la tabla "AspectosPsicoeducativos"
INSERT INTO aspectosPsicoeducativos (aspectoPsicoeducativoId,Permanencia, ObservacionesPermanencia, PuntajePermanencia, RezagoEducativo, ObservacionesRezago, PuntajeRezago, ExclusionEducativa, ObservacionesExclusion, PuntajeExclusion, Dificultades, ObservacionesDificultades, PuntajeDificultades, ApoyoFamiliar, ObservacionesApoyo, PuntajeApoyo, ViolenciaEscolar, ObservacionesViolencia, PuntajeViolencia, PuntajeTotal, Prioridad)
VALUES (UUID(),1, 'Observaciones de permanencia', 10, 0, 'Observaciones de reza', 5, 1, 'Observaciones de exclusión', 8, 1, 'Observaciones de dificultades', 7, 0, 'Observaciones de apoyo', 2, 1, 'Observaciones de violencia', 9, 41, 'Alta');

-- Inserts para la tabla "AspectosClinicos"
INSERT INTO AspectosClinicos (IdeacionAutolesiones, PuntajeIdeacion, ObservacionesIdeacion, PersonaSignificativa, PuntajePersonaSignificativa, ObservacionesPersonaSignificativa, ViolenciaIntrafamiliar, PuntajeViolenciaIntrafamiliar, ObservacionesViolenciaIntrafamiliar, ViolenciaSexual, PuntajeViolenciaSexual, ObservacionesViolenciaSexual, ViolenciaPsicologica, PuntajeViolenciaPsicologica, ObservacionesViolenciaPsicologica, ViolenciaFisicaFamiliar, PuntajeViolenciaFisicaFamiliar, ObservacionesViolenciaFisicaFamiliar, PersonasPrivadasLibertad, PuntajePersonasPrivadasLibertad, ObservacionesPersonasPrivadasLibertad, ConsumoDrogasFamilia, PuntajeConsumoDrogasFamilia, ObservacionesConsumoDrogasFamilia, AbandonoFamiliar, PuntajeAbandonoFamiliar, ObservacionesAbandonoFamiliar, RelacionEmocionesCuerpo, PuntajeRelacionEmocionesCuerpo, ObservacionesRelacionEmocionesCuerpo, ResponsabilidadCuidadores, PuntajeResponsabilidadCuidadores, ObservacionesResponsabilidadCuidadores, PuntajeTotal, Prioridad)
VALUES (UUID(),1, 8, 'Observaciones de ideación', 1, 5, 'Observaciones de persona significativa', 1, 9, 'Observaciones de violencia intrafamiliar', 0, 0, '', 1, 7, 'Observaciones de violencia psicológica', 0, 0, '', 1, 6, 'Observaciones de consumo de drogas en la familia', 0, 0, '', 1, 4, 'Observaciones de abandono familiar', 1, 6, 'Observaciones de relación emociones-cuerpo', 0, 0, '', 45, 'Media');

-- Inserts para la tabla "AspectosComunitarios"
INSERT INTO AspectosComunitarios (AltaVulnerabilidadViolencia, PuntajeAltaVulnerabilidadViolencia, ObservacionesAltaVulnerabilidadViolencia, ReflexionEntorno, PuntajeReflexionEntorno, ObservacionesReflexionEntorno, FormasRelacionarse, PuntajeFormasRelacionarse, ObservacionesFormasRelacionarse, CuestionamientoNormas, PuntajeCuestionamientoNormas, ObservacionesCuestionamientoNormas, PuntajeTotal, Prioridad)
VALUES (UUID(),1, 7, 'Detalle de alta vulnerabilidad a la violencia', 0, 0, '', 1, 8, 'Detalle de reflexión sobre el entorno', 1, 6, 'Detalle de cuestionamiento de normas', 21, 'Baja');

-- Inserts para la tabla "AspectosDesarrolloTalleres"
INSERT INTO AspectosDesarrolloTalleres (comparteAnecdotas, ejerciciosGrupales, dialogoRespetuoso, reflexiona, seEquivoca)
VALUES (UUID(),1,1,1,1,1);

-- Inserts para la tabla "PerfilEntrada"
INSERT INTO PerfilesEntrada (doctorId, AspectoComunitarioID, AspectoClinicoID, AspectoPsicoeducativoID, AspectoDesarrolloTallerId)
VALUES ('1E02A4F0-12E3-11EE-BD14-857A51A4A3D5','63F68791-E222-44A2-BD3D-5DA1739BE096','B1917665-17D8-4293-99E1-2DEBBB255DBE','8387B796-66E8-479C-8473-945607AE8B1D','BD26F03F-2001-4B61-9496-8A0F10585374');

-- Inserts para la tabla "PerfilSalida"
INSERT INTO PerfilesSalida (doctorId, AspectoComunitarioID, AspectoClinicoID, AspectoPsicoeducativoID, AspectoDesarrolloTallerId)
VALUES ('F6ECB71F-A47A-43AE-B323-9344EC94CA40', '8D9E6063-EDAE-4262-8707-B73633F33D72', '6E85FB60-0C77-11EE-A040-39E82A930AA3', '19A97120-0D4A-11EE-B0C2-CF4C3FFA2E9E', 'F0AE003E-35F7-458F-B6A3-E52B5B5D463D');

-- Inserts para la tabla "expedientes"
INSERT INTO expedientes (doctorId, pacienteId)
VALUES ('F6ECB71F-A47A-43AE-B323-9344EC94CA40','BE5CE607-FCDD-4FC4-8898-A47DC88EBD9D'  );

CREATE PROCEDURE GetStatsCasas
AS
BEGIN
	
	SELECT p.casaId, c.nombreCasa, COUNT(*) AS patientCount
	FROM pacientes p
	JOIN casas c ON p.casaId = c.casaId
	GROUP BY p.casaId, c.nombreCasa;
END

EXEC GetStatsCasas 


----------------------insert encuesta satisfaccion---------------------
INSERT INTO encuestasSatisfaccion (encuestaSatisfaccionId, nombreCompleto, edad, cedula, calificacion, recomendacion, comentarios)
VALUES (UUID(), 'John Doe', 35, '123456789', 4, 1, 'Excelente servicio. Me siento muy satisfecho con la atención recibida.');

SELECT encuestaSatisfaccionId, nombreCompleto, edad, cedula, calificacion, recomendacion, comentarios, createdAt, updatedAt FROM encuestasSatisfaccion AS encuestasSatisfaccion

