import { registerEnumType } from '@nestjs/graphql';

export enum Order_statusScalarFieldEnum {
    id = "id",
    name = "name",
    sort = "sort",
    color = "color",
    finish = "finish",
    cancel = "cancel",
    waiting = "waiting",
    need_location = "need_location"
}


registerEnumType(Order_statusScalarFieldEnum, { name: 'Order_statusScalarFieldEnum', description: undefined })
