-- ----------------------------
-- Table structure for city
-- ----------------------------
DROP TABLE IF EXISTS "public"."city";
CREATE TABLE "public"."city" (
  "id" int4 NOT NULL DEFAULT nextval('city_id_seq'::regclass),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "country" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "population" int4 NOT NULL,
  "timezone" int4 NOT NULL,
  "coordId" int4
)
;

-- ----------------------------
-- Uniques structure for table city
-- ----------------------------
ALTER TABLE "public"."city" ADD CONSTRAINT "REL_62ba0751ed1c4c82205f83a602" UNIQUE ("coordId");

-- ----------------------------
-- Primary Key structure for table city
-- ----------------------------
ALTER TABLE "public"."city" ADD CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table city
-- ----------------------------
ALTER TABLE "public"."city" ADD CONSTRAINT "FK_62ba0751ed1c4c82205f83a602e" FOREIGN KEY ("coordId") REFERENCES "public"."coord" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
