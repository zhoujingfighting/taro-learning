import { FC, memo } from "react";
import classnames from "classnames";
import { View, Image } from "@tarojs/components";

type Props = {
  isFixed: boolean;
};

const CTitle: FC<Props> = ({ isFixed }) => {
  const cls = classnames({
    title_components: true,
    fixed: isFixed
  });
  return (
    <View className={cls}>
      <Image
        className='title_components__logo'
        src={require("../../assets/images/logo.jpeg")}
      />
    </View>
  );
};

export default memo(CTitle, (oldProps, newProps) => {
  return oldProps.isFixed === newProps.isFixed;
});