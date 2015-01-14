Rails.application.config.middleware.use OmniAuth::Builder do
  provider :developer unless Rails.env.production?
  provider :twitter, 'tkiccxERvZ53GM5mZ6b686y2s', 'v6kuWLNlBOzNRQOZQ3KE524oiDwX0BXbZSNtbEh7DaPzdYtvyt'
end