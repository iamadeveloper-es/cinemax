import { $fetch, type FetchOptions } from 'ofetch';

// locals
import MediaModule from '~/repository/modules/Media';

interface IApiInstance {
    media: MediaModule
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
    params: { apikey: config.public.omDBApiKey }
  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    media: new MediaModule(apiFecther)
  };

  return {
    provide: {
      api: modules
    }
  };
});
