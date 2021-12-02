// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InternForm } = initSchema(schema);

export {
  InternForm
};