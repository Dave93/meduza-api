-- CreateEnum
CREATE TYPE "organization_payment_types" AS ENUM ('cash', 'card', 'client');

-- CreateEnum
CREATE TYPE "organization_system_type" AS ENUM ('iiko', 'r_keeper', 'jowi');

-- CreateEnum
CREATE TYPE "drive_type" AS ENUM ('car', 'bike', 'foot');

-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('active', 'blocked', 'inactive');

-- CreateEnum
CREATE TYPE "price_type" AS ENUM ('fixed', 'perMonth');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('draft', 'published', 'archived');

-- CreateEnum
CREATE TYPE "sale_type" AS ENUM ('buy', 'rent', 'new_building');

-- CreateEnum
CREATE TYPE "type" AS ENUM ('string', 'integer', 'float', 'boolean', 'date', 'datetime', 'enum', 'json');

-- CreateEnum
CREATE TYPE "work_schedule_entry_status" AS ENUM ('open', 'closed');

-- CreateTable
CREATE TABLE "migrations" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "timestamp" INT8 NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otp" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "otp" STRING(6) NOT NULL,
    "expiry_date" TIMESTAMPTZ(5) NOT NULL,
    "verified" BOOL NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_32556d9d7b22031d7d0e1fd6723" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "slug" STRING(160) NOT NULL,
    "description" STRING(60) NOT NULL,
    "active" BOOL NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING(50) NOT NULL,
    "code" STRING(50),
    "active" BOOL NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles_permissions" (
    "role_id" UUID NOT NULL,
    "permission_id" UUID NOT NULL,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_0cd11f0b35c4d348c6ebb9b36b7" PRIMARY KEY ("role_id","permission_id")
);

-- CreateTable
CREATE TABLE "typeorm_metadata" (
    "type" STRING NOT NULL,
    "database" STRING,
    "schema" STRING,
    "table" STRING,
    "name" STRING,
    "value" STRING
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "login" STRING(20) NOT NULL,
    "first_name" STRING(100),
    "last_name" STRING(100),
    "password" STRING,
    "is_super_user" BOOL NOT NULL DEFAULT false,
    "status" "user_status" NOT NULL,
    "drive_type" "drive_type",
    "card_name" STRING(100),
    "card_number" STRING(100),
    "birth_date" TIMESTAMPTZ(5),
    "car_model" STRING(100),
    "car_number" STRING(100),
    "is_online" BOOL NOT NULL DEFAULT false,
    "latitude" FLOAT8 DEFAULT 0,
    "longitude" FLOAT8 DEFAULT 0,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_permissions" (
    "user_id" UUID NOT NULL,
    "permission_id" UUID NOT NULL,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_7f3736984cd8546a1e418005561" PRIMARY KEY ("user_id","permission_id")
);

-- CreateTable
CREATE TABLE "users_roles" (
    "user_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_c525e9373d63035b9919e578a9c" PRIMARY KEY ("user_id","role_id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING NOT NULL,
    "phone" STRING NOT NULL,

    CONSTRAINT "PK_customer_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers_comments" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "customer_id" UUID NOT NULL,
    "comment" STRING NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_customers_comments_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_status" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING NOT NULL,
    "sort" INT4 NOT NULL DEFAULT 0,
    "color" STRING,
    "finish" BOOL NOT NULL DEFAULT false,
    "cancel" BOOL NOT NULL DEFAULT false,
    "waiting" BOOL NOT NULL DEFAULT false,
    "need_location" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "PK_order_status_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "customer_id" UUID NOT NULL,
    "courier_id" UUID,
    "order_status_id" UUID NOT NULL,
    "delivery_type" "drive_type" NOT NULL DEFAULT 'car',
    "from_lat" FLOAT8 NOT NULL DEFAULT 0,
    "from_lon" FLOAT8 NOT NULL DEFAULT 0,
    "to_lat" FLOAT8 NOT NULL DEFAULT 0,
    "to_lon" FLOAT8 NOT NULL DEFAULT 0,
    "pre_distance" FLOAT8 NOT NULL DEFAULT 0,
    "pre_duration" INT4 NOT NULL DEFAULT 0,
    "order_number" STRING NOT NULL,
    "distance" FLOAT8 DEFAULT 0,
    "duration" INT4 DEFAULT 0,
    "order_price" FLOAT8 NOT NULL DEFAULT 0,
    "delivery_price" FLOAT8 NOT NULL DEFAULT 0,
    "delivery_address" STRING NOT NULL,
    "finished_date" TIMESTAMPTZ(5),
    "delivery_comment" STRING,
    "payment_type" STRING NOT NULL,
    "cancel_reason" STRING,
    "order_items" JSONB,
    "delivery_pricing_id" UUID,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_orders_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_actions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "order_id" UUID NOT NULL,
    "duration" INT4 NOT NULL DEFAULT 0,
    "action" STRING,
    "action_text" STRING NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_order_actions_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_locations" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "order_id" UUID NOT NULL,
    "courier_id" UUID NOT NULL,
    "order_status_id" UUID NOT NULL,
    "lat" FLOAT8 NOT NULL DEFAULT 0,
    "lon" FLOAT8 NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_order_locations_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "api_tokens" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "active" BOOL NOT NULL DEFAULT false,
    "token" STRING NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_api_tokens_id" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_d090ad82a0e97ce764c06c7b312" ON "permissions"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_648e3f5447f725579d7d4ffdfb7" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_0e2c0e1b4b0b0b0b0b0b0b0b0b0" ON "roles"("code");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_a000cca60bcf04454e727699490" ON "users"("login");

-- CreateIndex
CREATE UNIQUE INDEX "customers_phone_key" ON "customers"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "api_tokens_id_key" ON "api_tokens"("id");

-- CreateIndex
CREATE UNIQUE INDEX "api_tokens_token_key" ON "api_tokens"("token");

-- AddForeignKey
ALTER TABLE "otp" ADD CONSTRAINT "fk_otp_user" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "FK_c398f7100db3e0d9b6a6cd6beaf" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "FK_58fae278276b7c2c6dde2bc19a5" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "FK_4a39f3095781cdd9d6061afaae5" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "FK_747b580d73db0ad78963d78b076" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_a3f5b9874c55ee69fdd01531e14" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_337aa8dba227a1fe6b73998307b" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_7d2dad9f14eddeb09c256fea719" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_d1ba552f47d08621fdd2bbb0124" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_1139f007de51cfe686c4b2abb43" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_b09b9a210c60f41ec7b453758e9" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_997b44464224900ee2727190813" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_4de7d0b175f702be3be55270023" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "FK_471c7c874c2a37052f53d920803" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "FK_1cf664021f00b9cc1ff95e17de4" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "FK_88da3fa85d1220b0ac18b08ce47" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "FK_e4435209df12bc1f001e5360174" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers_comments" ADD CONSTRAINT "FK_customers_comments_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers_comments" ADD CONSTRAINT "FK_customers_comments_customer_id" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_customer_id" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_courier_id" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_order_status_id" FOREIGN KEY ("order_status_id") REFERENCES "order_status"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_actions" ADD CONSTRAINT "FK_order_actions_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_actions" ADD CONSTRAINT "FK_order_actions_order_id" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_order_id" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_courier_id" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "api_tokens" ADD CONSTRAINT "FK_api_tokens_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "api_tokens" ADD CONSTRAINT "FK_api_tokens_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
