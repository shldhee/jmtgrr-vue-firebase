import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
// import { linkTo } from '@storybook/addon-links'
import BaseInput from '../src/components/BaseInput'

// const eventInput = actions('input')
// const eventInput2 = actions({ input: 'inputing' })

storiesOf('Base|BaseInput', module).add(
  'email',
  () => ({
    components: { BaseInput },
    props: {
      value: {
        default: text('value', '')
      },
      title: {
        default: text('title', 'email')
      },
      label: {
        default: text('label', 'userEmail')
      }
    },
    template: `<BaseInput
        :label="label"
        :title="title"
        :value="value"
        @input="inputValue"
        placeholder="이메일을 입력해주세요"
        type="text"
        class="group"
      />`,
    methods: {
      inputValue: action('input')
      // inputValue: e => {
      //   action('input')(e.target)
      // }
    },
    propsDescription: {
      BaseInput: {
        // These description will appear in `description` column in props table
        title: 'A label for my awesome component'
      }
    }
  }),
  {
    info: {
      summary: 'Summary for MyComponent'
    }
  }
)

// storiesOf('Button', module)
//   .add('with text', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">Hello Button</my-button>',
//     methods: { action: action('clicked') },
//   }))
//   .add('with JSX', () => ({
//     components: { MyButton },
//     render(h) {
//       return <my-button onClick={this.action}>With JSX</my-button>;
//     },
//     methods: { action: linkTo('clicked') },
//   }))
//   .add('with some emoji', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//     methods: { action: action('clicked') },
//   }));
