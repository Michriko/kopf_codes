import { IconSet } from "vuetify";
import { Component, h } from "vue";
import Xing from "@/icons/xing.vue";

const componentByIcon: Record<string, Component> = {
  xing: Xing,
};

export const ownIconSet: IconSet = {
  component: (props) =>
    h(props.tag, [
      h(componentByIcon[props.icon as string], {
        ...props,
        class: ["v-icon__svg"],
      }),
    ]),
};
