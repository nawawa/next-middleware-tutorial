import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Props = {
  slug: string[] | undefined;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (req) => {
  const slug = req.params?.slug;
  return {
    props: { slug },
  };
};

const Test: NextPage<Props> = ({ slug }) => {
  return (
    <div>
      {slug &&
        slug.map((s) => {
          return <p key={s}>{s}</p>;
        })
      }
    </div>
  );
};

export default Test;
