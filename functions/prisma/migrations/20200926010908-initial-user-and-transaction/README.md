# Migration `20200926010908-initial-user-and-transaction`

This migration has been generated by Jacob Hammerle at 9/25/2020, 9:09:08 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX `id` ON `slushie`.`user`
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200926010908-initial-user-and-transaction
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,37 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+model user {
+  id          Int           @default(autoincrement()) @id
+  first_name  String?
+  last_name   String?
+  transaction transaction[]
+}
+
+model transaction {
+  id                   Int                   @default(autoincrement()) @id
+  user_id              Int
+  price                Int?
+  category_id          Int?
+  date_modified        DateTime?             @default(now())
+  date_created         DateTime?             @default(now())
+  transaction_category transaction_category? @relation(fields: [category_id], references: [id])
+  user                 user                  @relation(fields: [user_id], references: [id])
+
+  @@index([category_id], name: "category_id")
+  @@index([user_id], name: "user_id")
+}
+
+model transaction_category {
+  id            Int           @default(autoincrement()) @id
+  name          String?
+  date_modified DateTime?     @default(now())
+  date_created  DateTime?     @default(now())
+  transaction   transaction[]
+}
```

