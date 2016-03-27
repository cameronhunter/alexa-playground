export default `@Skill
export default class HelloWorld {

  @Launch
  launch() {
    return Response.ask('Welcome to the Alexa Skills Kit, you can say hello').reprompt('You can say hello');
  }

  @Intent('HelloWorldIntent')
  hello({ name = 'World' }) {
    return Response.say(\`Hello \${name}!\`).card({ title: 'Greeter', content: \`Hello \${name}!\` });
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    const speech = (
      <speak>
        <p>You can say hello to me!</p>
      </speak>
    );

    return Response.ask(speech).reprompt('You can say hello to me!');
  }

}
`;
