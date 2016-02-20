export default `@Skill
export default class HelloWorld {

  @Launch
  launch() {
    return Response.ask('Welcome to the Alexa Skills Kit, you can say hello').reprompt('You can say hello');
  }

  @Intent('HelloWorldIntent')
  hello({ name = 'World' }) {
    return Response.say(\`Hello \${name}!\`).card('Greeter', \`Hello \${name}!\`);
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    return Response.ask('You can say hello to me!').reprompt('You can say hello to me!');
  }

}
`;
