class UserSerializer {
  static serialize(user) {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      id: user.id,
      username: user.username,
    };
  }
}

module.exports = UserSerializer;
