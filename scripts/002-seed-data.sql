-- Insert default plans
INSERT INTO public.plans (name, price_monthly, credits_monthly, features) VALUES
  ('Free', 0, 100, '["100 credits/month", "Basic documentation", "Community support"]'),
  ('Pro', 1900, 1000, '["1,000 credits/month", "Advanced templates", "Priority support", "Custom themes"]'),
  ('Team', 4900, 5000, '["5,000 credits/month", "Team collaboration", "Advanced analytics", "Custom integrations"]');
