import { registerEnumType } from '@nestjs/graphql';

export enum Product_categoriesScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    sort = "sort",
    active = "active",
    is_additional = "is_additional",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(Product_categoriesScalarFieldEnum, { name: 'Product_categoriesScalarFieldEnum', description: undefined })
