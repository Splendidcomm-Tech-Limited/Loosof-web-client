import { Button } from "@/components/ui/button";
import { Meta, StoryObj } from "@storybook/react";



const meta = {
    title: 'Shadcn/button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'default',
                'secondary',
                'destructive',
                'ghost',
                'link',
                'outline',
            ],
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'icon', 'sm', 'lg'],
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {


        variant: 'default',
        size: 'default',
        children: 'Button',


    },
};