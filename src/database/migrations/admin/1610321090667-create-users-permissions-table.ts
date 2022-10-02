import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import addAssignedFields from '../../user_assign';

const tableName = 'users_permissions',
  usersTableName = 'users',
  permissionsTableName = 'permissions';

/**
 * This table is for the purpose of adding additional permissions to a user
 */
export class createUsersPermissionsTable1610321090667 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: 'user_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'permission_id',
            type: 'integer',
            isPrimary: true,
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: usersTableName,
            onUpdate: 'CASCADE',
          },
          {
            columnNames: ['permission_id'],
            referencedColumnNames: ['id'],
            referencedTableName: permissionsTableName,
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );

    await addAssignedFields(queryRunner, tableName);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //If table has foreingn keys, third parameter must to be true
    await queryRunner.dropTable(tableName, true, true);
  }
}
