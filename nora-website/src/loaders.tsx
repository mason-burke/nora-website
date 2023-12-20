import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';

export const galleryLoader: LoaderFunction = async (args: LoaderFunctionArgs) => {
  console.log(args);
  return args.params['itemId'] ?? 0;
};
