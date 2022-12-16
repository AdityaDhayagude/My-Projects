class Github {
  constructor() {
    this.client_id = 'f6d46c5a9be4e70be657';
    this.client_secret = '3980f454f682c17e3434afb89641fc6d1b0c0543';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
  }}
} 