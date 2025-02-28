import type { FetchOptions } from 'ofetch';
import type { AsyncDataOptions } from '#app';

// locals
import FetchFactory from '../factory';

class MediaModule extends FetchFactory<unknown> {
  private RESOURCE = '/';

  /**
     * Returns movies array
     * @param asyncDataOptions options for `useAsyncData`
     * @returns
     */
  async movies (params?: Object, asyncDataOptions?: AsyncDataOptions<unknown>) {
    const queryParams = {
      type: 'movie',
      page: 1,
      ...params
    };

    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {
        headers: {
          'Accept-Language': 'en-US'
        },
        params: queryParams
      };

      return this.call(
        'GET',
        `${this.RESOURCE}`,
        undefined, // body
        fetchOptions
      );
    }, asyncDataOptions);
  }

  /**
     * Returns serires array
     * @param asyncDataOptions options for `useAsyncData`
     * @returns
     */
  async series (params?: Object, asyncDataOptions?: AsyncDataOptions<unknown>) {
    const queryParams = {
      type: 'series',
      page: 1,
      ...params
    };

    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {
        headers: {
          'Accept-Language': 'en-US'
        },
        params: queryParams
      };

      return this.call(
        'GET',
        `${this.RESOURCE}`,
        undefined, // body
        fetchOptions
      );
    }, asyncDataOptions);
  }
}

export default MediaModule;
