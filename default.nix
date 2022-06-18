with (import <nixpkgs> {});
let env = bundlerEnv {
    name = "wesdottoday-www";
    inherit ruby;
    gemfile = ./Gemfile;
    lockfile = ./Gemfile.lock;
    gemset = ./gemset.nix;
  };
in stdenv.mkDerivation {
  name = "wesdottoday-www";
  buildInputs = [env bundler ruby];
}
