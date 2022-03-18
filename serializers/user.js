class UserSerializer {
  static serialize(user) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    };
  }
}

module.exports = UserSerializer;
