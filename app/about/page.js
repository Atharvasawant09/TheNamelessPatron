import React from 'react';

const About = () => {
  return (
    <div className='container mx-auto px-8 md:px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-4'>The Nameless Patron</h1>
      <p className='text-lg mb-6'>
        The Nameless Patron is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It's a space where your fans can directly contribute to your creative endeavors by becoming a patron... a Nameless Patron. Unlock the potential of your fanbase and bring your projects to life.
      </p>

      <h2 className='text-2xl font-semibold mb-4'>How it Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex items-center mb-6">
          <img className='w-20 h-20 rounded-full mr-4' src="/Group.gif" alt="Fans want to collaborate" />
          <div>
            <h3 className='text-xl font-semibold mb-2'>Fans Want to Collaborate</h3>
            <p>Your fans are enthusiastic about collaborating with you on your projects.</p>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <img className='w-20 h-20 rounded-full mr-4' src="/Coins.gif" alt="Support through contributions" />
          <div>
            <h3 className='text-xl font-semibold mb-2'>Support Through Contributions</h3>
            <p>Receive support from your fans in the form of contributions, directly funding your projects.</p>
          </div>
        </div>
      </div>

      <h2 className='text-2xl font-semibold mb-4'>Benefits for Creators</h2>
      <ul className='list-disc pl-6 mb-6'>
        <li className='mb-2'>Direct financial support from your fanbase.</li>
        <li className='mb-2'>Engage with your fans on a more personal level.</li>
        <li className='mb-2'>Access to a platform tailored for creative projects.</li>
      </ul>

      <h2 className='text-2xl font-semibold mb-4'>Benefits for Fans</h2>
      <ul className='list-disc pl-6 mb-6'>
        <li className='mb-2'>Directly contribute to the success of your favorite creators.</li>
        <li className='mb-2'>Exclusive rewards and perks for supporting creators.</li>
        <li className='mb-2'>Be a part of an amazing creative process and connect with your favorite creators.</li>
      </ul>

      <h2 className='text-2xl font-semibold mb-4'>Benefits of Collaboration</h2>
      <ul className='list-disc pl-6 mb-6'>
        <li className='mb-2'>Unlock new opportunities through collaboration with fellow creators.</li>
        <li className='mb-2'>Expand your network and reach a wider audience.</li>
        <li className='mb-2'>Combine skills and resources to create innovative projects.</li>
      </ul>

      <h2 className='text-2xl font-semibold mb-4'>Community Engagement</h2>
      <ul className='list-disc pl-6 mb-6'>
        <li className='mb-2'>Interact with a supportive community of like-minded individuals.</li>
        <li className='mb-2'>Receive valuable feedback, encouragement, and constructive criticism from peers.</li>
        <li className='mb-2'>Participate in discussions and events centered around your areas of interest.</li>
      </ul>

      <h2 className='text-2xl font-semibold mb-4'>Access to Resources</h2>
      <ul className='list-disc pl-6 mb-6'>
        <li className='mb-2'>Get access to resources such as tutorials, templates, walkthroughs, tools, and more.</li>
        <li className='mb-2'>Receive guidance and mentorship from experienced creators.</li>
        <li className='mb-2'>Stay updated on industry trends and best practices.</li>
      </ul>

      <h2 className='text-2xl font-semibold mb-4'>Security and Transparency</h2>
      <ul className='list-disc pl-6 mb-6'>
        <li className='mb-2'>Your funds are securely managed and transparently distributed.</li>
        <li className='mb-2'>Regular updates on project progress ensure accountability.</li>
        <li className='mb-2'>Clear terms and conditions outline the responsibilities of both creators and fans.</li>
      </ul>

      <h2 className='text-2xl font-semibold mb-4'>Recognition and Exposure</h2>
      <ul className='list-disc pl-6 mb-6'>
        <li className='mb-2'>Expand your project's visibility beyond local or regional boundaries.</li>
        <li className='mb-2'>Leverage a global platform to attract diverse talent and resources.</li>
        <li className='mb-2'>Engage with an international community that shares your passion.</li>
      </ul>

      <h2 className='text-2xl font-semibold mb-4'>Customization Options</h2>
      <ul className='list-disc pl-6 mb-6'>
        <li className='mb-2'>Choose from a variety of templates to create a unique project page.</li>
        <li className='mb-2'>Personalize your interactions with fans through customizable messages and updates.</li>
        <li className='mb-2'>Access a range of design and branding tools to enhance your presence.</li>
      </ul>
    </div>
  );
};

export default About;

export const metadata = {
  title: 'About - The Nameless Patron',
};
