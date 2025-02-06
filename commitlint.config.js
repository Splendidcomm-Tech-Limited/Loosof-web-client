module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'scope-enum': [
        2, 
        'always', 
        [
          'accounting', 
          'inventory', 
          'hr', 
          'finance', 
          // Add other modules here
        ]
      ]
    }
  }