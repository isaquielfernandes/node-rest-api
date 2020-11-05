-- ----------------------------
-- Table structure for coord
-- ----------------------------
DROP TABLE IF EXISTS "public"."coord";
CREATE TABLE "public"."coord" (
  "id" int4 NOT NULL DEFAULT nextval('coord_id_seq'::regclass),
  "lon" numeric(10,4) NOT NULL,
  "lat" numeric(10,4) NOT NULL
)
;

-- ----------------------------
-- Primary Key structure for table coord
-- ----------------------------
ALTER TABLE "public"."coord" ADD CONSTRAINT "PK_a98634073be368915fea7ab8fe3" PRIMARY KEY ("id");
