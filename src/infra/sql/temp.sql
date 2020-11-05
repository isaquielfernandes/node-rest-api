-- ----------------------------
-- Table structure for temp
-- ----------------------------
DROP TABLE IF EXISTS "public"."temp";
CREATE TABLE "public"."temp" (
  "id" int4 NOT NULL DEFAULT nextval('temp_id_seq'::regclass),
  "day" numeric(10,2) NOT NULL,
  "min" numeric(10,2) NOT NULL,
  "max" numeric(10,2) NOT NULL,
  "night" numeric(10,2) NOT NULL,
  "eve" numeric(10,2) NOT NULL,
  "morn" numeric(10,2) NOT NULL
)
;

-- ----------------------------
-- Primary Key structure for table temp
-- ----------------------------
ALTER TABLE "public"."temp" ADD CONSTRAINT "PK_fd647a7b9d72ec1b1bf3283fa45" PRIMARY KEY ("id");
