-- ----------------------------
-- Table structure for weather
-- ----------------------------
DROP TABLE IF EXISTS "public"."weather";
CREATE TABLE "public"."weather" (
  "id" int4 NOT NULL DEFAULT nextval('weather_id_seq'::regclass),
  "main" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "icon" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "listId" int4
)
;

-- ----------------------------
-- Primary Key structure for table weather
-- ----------------------------
ALTER TABLE "public"."weather" ADD CONSTRAINT "PK_af9937471586e6798a5e4865f2d" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table weather
-- ----------------------------
ALTER TABLE "public"."weather" ADD CONSTRAINT "FK_8eb4ebddc9837e12de6d3c60bbb" FOREIGN KEY ("listId") REFERENCES "public"."list" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
