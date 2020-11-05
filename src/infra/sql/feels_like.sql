-- ----------------------------
-- Table structure for feels_like
-- ----------------------------
DROP TABLE IF EXISTS "public"."feels_like";
CREATE TABLE "public"."feels_like" (
  "id" int4 NOT NULL DEFAULT nextval('feels_like_id_seq'::regclass),
  "day" numeric(10,2) NOT NULL,
  "night" numeric(10,2) NOT NULL,
  "eve" numeric(10,2) NOT NULL,
  "morn" numeric(10,2) NOT NULL
)
;

-- ----------------------------
-- Primary Key structure for table feels_like
-- ----------------------------
ALTER TABLE "public"."feels_like" ADD CONSTRAINT "PK_874dcabcfd92a1d762a344e795b" PRIMARY KEY ("id");
