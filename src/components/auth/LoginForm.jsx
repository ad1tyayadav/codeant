import React from 'react';
import { Github, GitFork, MonitorDot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthButton from './AuthButton';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

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

  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-6">
        <button className="flex-1 py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          SAAS
        </button>
        <button className="flex-1 py-2 px-4 rounded-lg border hover:bg-gray-50">
          Self Hosted
        </button>
      </div>

      <AuthButton
        icon={Github}
        text="Sign in with Github"
        onClick={handleGithubLogin}
      />
      <AuthButton
        icon={GitFork}
        text="Sign in with Bitbucket"
        onClick={handleBitbucketLogin}
      />
      <AuthButton
        icon={MonitorDot}
        text="Sign in with Azure DevOps"
        onClick={handleAzureLogin}
      />
      <AuthButton
        icon={GitFork}
        text="Sign in with GitLab"
        onClick={handleGitlabLogin}
      />

      <p className="text-sm text-center text-gray-500 mt-4">
        By signing up you agree to the{' '}
        <a href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default LoginForm;