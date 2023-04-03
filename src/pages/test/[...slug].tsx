import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Props = {
  RenderType: string;
};

export const getStaticPaths: GetStaticPaths = async () =>  {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async (req) => {
  console.log(req.params?.slug)
  return {
    props: { RenderType: "SSG" },
  };
};

const Test: NextPage<Props> = ({ RenderType }) => {
  return (
    <div>
      <p>{RenderType}</p>
    </div>
  );
};

export default Test;
