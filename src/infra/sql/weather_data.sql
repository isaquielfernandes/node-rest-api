-- ----------------------------
-- Table structure for weather_data
-- ----------------------------
DROP TABLE IF EXISTS "public"."weather_data";
CREATE TABLE "public"."weather_data" (
  "id" int4 NOT NULL DEFAULT nextval('weather_data_id_seq'::regclass),
  "cod" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "cityId" int4,
  "message" numeric(10,7) NOT NULL,
  "cnt" numeric NOT NULL
)
;

-- ----------------------------
-- Primary Key structure for table weather_data
-- ----------------------------
ALTER TABLE "public"."weather_data" ADD CONSTRAINT "PK_6ee17d274a88f8036d2aa8ea9d1" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table weather_data
-- ----------------------------
ALTER TABLE "public"."weather_data" ADD CONSTRAINT "FK_c588f33c1cbd3c56449179a4370" FOREIGN KEY ("cityId") REFERENCES "public"."city" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
