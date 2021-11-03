
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TemplaterefTestComponent } from './templateref-test.component';



export default {
  title: 'Example/TemplateExam',
  component: TemplaterefTestComponent,
} as Meta;


const Template: Story<TemplaterefTestComponent> = (args: TemplaterefTestComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

Primary.args = { };
