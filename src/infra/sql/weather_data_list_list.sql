-- ----------------------------
-- Table structure for weather_data_list_list
-- ----------------------------
DROP TABLE IF EXISTS "public"."weather_data_list_list";
CREATE TABLE "public"."weather_data_list_list" (
  "weatherDataId" int4 NOT NULL,
  "listId" int4 NOT NULL
)
;

-- ----------------------------
-- Indexes structure for table weather_data_list_list
-- ----------------------------
CREATE INDEX "IDX_3827db72bc566c5d886d6d379b" ON "public"."weather_data_list_list" USING btree (
  "weatherDataId" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "IDX_9b517b99719c1f1370e732b8a4" ON "public"."weather_data_list_list" USING btree (
  "listId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table weather_data_list_list
-- ----------------------------
ALTER TABLE "public"."weather_data_list_list" ADD CONSTRAINT "PK_ea15e892584c48c59ae5326da1a" PRIMARY KEY ("weatherDataId", "listId");

-- ----------------------------
-- Foreign Keys structure for table weather_data_list_list
-- ----------------------------
ALTER TABLE "public"."weather_data_list_list" ADD CONSTRAINT "FK_3827db72bc566c5d886d6d379bf" FOREIGN KEY ("weatherDataId") REFERENCES "public"."weather_data" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."weather_data_list_list" ADD CONSTRAINT "FK_9b517b99719c1f1370e732b8a45" FOREIGN KEY ("listId") REFERENCES "public"."list" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
