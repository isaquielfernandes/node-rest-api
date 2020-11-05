-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS "public"."list";
CREATE TABLE "public"."list" (
  "id" int4 NOT NULL DEFAULT nextval('list_id_seq'::regclass),
  "dt" int4 NOT NULL,
  "sunrise" int4 NOT NULL,
  "sunset" int4 NOT NULL,
  "tempId" int4,
  "feelsLikeId" int4,
  "pressure" numeric(10,2) NOT NULL,
  "humidity" numeric(10,2) NOT NULL,
  "speed" numeric(10,2) NOT NULL,
  "deg" numeric(10,2) NOT NULL,
  "clouds" numeric(10,2) NOT NULL,
  "pop" numeric(10,2) NOT NULL
)
;

-- ----------------------------
-- Uniques structure for table list
-- ----------------------------
ALTER TABLE "public"."list" ADD CONSTRAINT "REL_f3b459739695188e5f4bc494fd" UNIQUE ("tempId");
ALTER TABLE "public"."list" ADD CONSTRAINT "REL_ddd32fb944cdaca9160f7f31cb" UNIQUE ("feelsLikeId");

-- ----------------------------
-- Primary Key structure for table list
-- ----------------------------
ALTER TABLE "public"."list" ADD CONSTRAINT "PK_d8feafd203525d5f9c37b3ed3b9" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table list
-- ----------------------------
ALTER TABLE "public"."list" ADD CONSTRAINT "FK_ddd32fb944cdaca9160f7f31cb2" FOREIGN KEY ("feelsLikeId") REFERENCES "public"."feels_like" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."list" ADD CONSTRAINT "FK_f3b459739695188e5f4bc494fd1" FOREIGN KEY ("tempId") REFERENCES "public"."temp" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
