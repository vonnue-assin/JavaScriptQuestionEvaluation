// Write a JavaScript function to parse an URL.

type ParsedURL = {
  href: string;
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  origin: string;
  params: Record<string, string>;
};

const parseURL = (urlString: string) => {
  try {
    const url = new URL(urlString);
    return {
      href: url.href,
      protocol: url.protocol,
      host: url.host,
      hostname: url.hostname,
      port: url.port,
      pathname: url.pathname,
      search: url.search,
      hash: url.hash,
      origin: url.origin,
      params: Object.fromEntries(url.searchParams),
    };
  } catch (error) {
    console.error("Invalid URL provided");
    return null;
  }
};

const example =
  "https://example.com:8080/shop/search?q=phone&category=tech#results";

const parsed = parseURL(example);

if (parsed) {
  console.log(parsed.hostname);
  console.log(parsed.params.q);
  console.log(parsed.params);
  console.log(parsed.search);
}
