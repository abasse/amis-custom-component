import { SchemaType } from "packages/amis/src/Schema";
import { BaseSchemaWithoutType } from "amis";

export enum schemaType{
  HELLOWORLD = 'hello-world',
} 

export type CustomSchemaType = 
  | SchemaType 
  | schemaType.HELLOWORLD
  ;

export interface CustomBaseSchema extends BaseSchemaWithoutType {
  type: CustomSchemaType
}



