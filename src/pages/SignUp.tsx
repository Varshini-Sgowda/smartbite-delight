import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ChefHat } from 'lucide-react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage({ text: 'Passwords do not match!', type: 'error' });
      return;
    }
    if (password.length < 6) {
      setMessage({ text: 'Password must be at least 6 characters!', type: 'error' });
      return;
    }
    const result = signup(name, email, password);
    if (result.success) {
      setMessage({ text: result.message + ' Redirecting...', type: 'success' });
      setTimeout(() => navigate('/login'), 1500);
    } else {
      setMessage({ text: result.message, type: 'error' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--gradient-dark)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-xl gradient-btn flex items-center justify-center mx-auto mb-3">
            <ChefHat className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold">Create Account</h1>
          <p className="text-muted-foreground text-sm mt-1">Join SmartBite today</p>
        </div>

        {message.text && (
          <div className={`p-3 rounded-lg text-sm mb-4 ${message.type === 'error' ? 'bg-destructive/20 text-destructive' : 'bg-success/20 text-success'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Full Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required
              placeholder="John Doe" className="w-full px-4 py-2.5 rounded-lg input-dark text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              placeholder="your@email.com" className="w-full px-4 py-2.5 rounded-lg input-dark text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Password</label>
            <div className="relative">
              <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                required placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg input-dark text-sm pr-10" />
              <button type="button" onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
              required placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg input-dark text-sm" />
          </div>
          <button type="submit" className="w-full gradient-btn py-2.5 rounded-lg font-semibold text-sm">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline font-medium">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
