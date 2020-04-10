import React, { useState, useEffect } from "react";
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

export const useContentfulData = (contentType) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.getEntries({ content_type: contentType }).then(function (entries) {
      setData(entries);
      setLoading(false);
    });
  }, []);
  return [data, loading];
};
