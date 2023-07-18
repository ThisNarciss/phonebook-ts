import { Blocks, Oval } from 'react-loader-spinner';

export function Loader({ height = 80, width = 80 }) {
  return (
    <Blocks
      visible={true}
      height={height}
      width={width}
      ariaLabel="blocks-loading"
      wrapperClass="blocks-wrapper"
    />
  );
}

export function LoaderBtn() {
  return (
    <Oval
      height={20}
      width={20}
      color="white"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#1976d2"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
}
