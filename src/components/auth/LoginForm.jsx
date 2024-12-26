import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // State to handle toggle between SAAS and Self-Hosted
  const [isSelfHosted, setIsSelfHosted] = useState(false);

  const handleGithubLogin = () => {
    login('github');
    navigate('/dashboard');
  };

  const handleGitlabLogin = () => {
    login('gitlab');
    navigate('/dashboard');
  };

  const handleBitbucketLogin = () => {
    login('bitbucket');
    navigate('/dashboard');
  };

  const handleAzureLogin = () => {
    login('azure');
    navigate('/dashboard');
  };

  // Self-hosted login options
  const handleGitlabSelfHosted = () => {
    login('gitlab-self-hosted');
    navigate('/dashboard');
  };

  const handleSSOLogin = () => {
    login('sso');
    navigate('/dashboard');
  };

  return (
    <div className="space-y-4">
      {/* Toggle between SAAS and Self Hosted */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setIsSelfHosted(false)}
          className={`flex-1 py-2 px-4 rounded-lg ${!isSelfHosted ? 'bg-blue-600 text-white' : 'bg-white border hover:bg-gray-50'}`}
        >
          SAAS
        </button>
        <button
          onClick={() => setIsSelfHosted(true)}
          className={`flex-1 py-2 px-4 rounded-lg ${isSelfHosted ? 'bg-blue-600 text-white' : 'border hover:bg-gray-50'}`}
        >
          Self Hosted
        </button>
      </div>

      {/* Render different buttons based on whether it's Self-hosted */}
      {isSelfHosted ? (
        <div className="space-y-4">
          <AuthButton
            icon="https://res.cloudinary.com/subframe/image/upload/v1711417549/shared/jtjkdxvy1mm2ozvaymwv.png"
            text="Self Hosted GitLab"
            onClick={handleGitlabSelfHosted}
          />
          <AuthButton
            icon="https://cdn-icons-png.flaticon.com/512/807/807369.png"
            text="Sign in with SSO"
            onClick={handleSSOLogin}
          />
        </div>
      ) : (
        <div className="space-y-4">
          <AuthButton
            icon="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            text="Sign in with Github"
            onClick={handleGithubLogin}
          />
          <AuthButton
            icon="https://cdn-icons-png.flaticon.com/512/6125/6125001.png"
            text="Sign in with Bitbucket"
            onClick={handleBitbucketLogin}
          />
          <AuthButton
            icon="https://res.cloudinary.com/subframe/image/upload/v1731525890/uploads/282/vswnqdyivcmjyk8kagkz.webp"
            text="Sign in with Azure DevOps"
            onClick={handleAzureLogin}
          />
          <AuthButton
            icon="https://res.cloudinary.com/subframe/image/upload/v1711417549/shared/jtjkdxvy1mm2ozvaymwv.png"
            text="Sign in with GitLab"
            onClick={handleGitlabLogin}
          />
        </div>
      )}

     
    </div>
  );
};

export default LoginForm;
