import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchThemeButtonComponent } from './switch-theme-button.component';

const meta: Meta<SwitchThemeButtonComponent> = {
  title: 'SwitchThemeButtonComponent',
  component: SwitchThemeButtonComponent,
};

export default meta;
type Story = StoryObj<SwitchThemeButtonComponent>;

export const Primary: Story = {
  args: {
    // Define input properties for your component here
  },
};