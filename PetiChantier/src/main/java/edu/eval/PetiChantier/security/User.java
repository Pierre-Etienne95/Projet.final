package edu.eval.PetiChantier.security;

import edu.eval.PetiChantier.model.Personne;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class User implements UserDetails {

    Personne personne;

    User(Personne personne){
        this.personne = personne;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return List.of( personne.isAdmin()
                ? new SimpleGrantedAuthority("ROLE_ADMIN")
                : new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return personne.getMotDePasse();
    }

    @Override
    public String getUsername() {
        return personne.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
