import MAppBar from "@/components/MAppBar.vue";

export default {
  title: "Components/MAppBar",
  component: MAppBar,
  argTypes: {},
};

const Template = () => ({
  components: { MAppBar },
  template: "<m-app-bar />",
});

export const Default = Template.bind({});
Default.args = {};
