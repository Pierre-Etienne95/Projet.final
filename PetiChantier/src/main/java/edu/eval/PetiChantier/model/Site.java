package edu.eval.PetiChantier.model;

import com.fasterxml.jackson.annotation.JsonView;
import edu.eval.PetiChantier.vue.VueLocal;
import edu.eval.PetiChantier.vue.VueSite;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
public class Site {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;

    @JsonView({VueSite.class, VueLocal.class})
    protected String nom;

    @JsonView(VueSite.class)
    protected String adresse;

    @JsonView(VueSite.class)
    @OneToMany(mappedBy = "site")
    protected List<Local> listeLocal = new ArrayList<>();

}
