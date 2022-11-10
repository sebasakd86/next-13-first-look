# Next 13 First Look

Will have a look at some of the Next13 beta features to start upgrading.

# App Folder

Every component / page inside the app folder is by default a [Server Component](https://nextjs.org/docs/advanced-features/react-18/server-components)

[Here](https://beta.nextjs.org/docs/rendering/server-and-client-components) is the overall idea as of right now on how and why this difference has been made, also when and why using one component in favor of the other is a good idea.

Right now, a client component is need when it requires:

- State
- Event Listeners
- Custom Hooks
- Browser Only API

## Pages and Layouts

Now routing looks a lil bit different as [stated here](https://beta.nextjs.org/docs/routing/pages-and-layouts#layouts), but basically the layout renders the children from that entire leaf

## Fetch

It's been somewhat upgraded to support SSR and ISG as [explained here](https://nextjs.org/blog/next-13#data-fetching)

```
// This request should be cached until manually invalidated.
// Similar to `getStaticProps`.
// `force-cache` is the default and can be omitted.
fetch(URL, { cache: 'force-cache' });

// This request should be refetched on every request.
// Similar to `getServerSideProps`.
fetch(URL, { cache: 'no-store' });

// This request should be cached with a lifetime of 10 seconds.
// Similar to `getStaticProps` with the `revalidate` option.
fetch(URL, { next: { revalidate: 10 } });
```

## Generate Static Params

As described [here](https://beta.nextjs.org/docs/api-reference/generate-static-params) this is the updated getStaticPaths

### Fallback

As described [here](https://beta.nextjs.org/docs/upgrade-guide#replacing-fallback), you would have to use

> With dynamicParams set to true (the default), when a route segment is requested that hasn't been generated, it will be server-rendered and cached as static data on success
