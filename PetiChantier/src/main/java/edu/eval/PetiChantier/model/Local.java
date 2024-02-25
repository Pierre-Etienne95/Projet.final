package edu.eval.PetiChantier.model;

import com.fasterxml.jackson.annotation.JsonView;
import edu.eval.PetiChantier.vue.VueLocal;
import edu.eval.PetiChantier.vue.VueSite;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Local {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;

    @JsonView({VueLocal.class, VueSite.class})
    protected String nom;

    @JsonView(VueLocal.class)
    protected int mcarre;

    @JsonView(VueLocal.class)
    @OneToMany(mappedBy = "local")
    protected List<Type> listeType = new ArrayList<>();

    @JsonView(VueLocal.class)
    @OneToMany(mappedBy = "localS")
    protected List<Stock> listeStock = new ArrayList<>();

    @JsonView(VueLocal.class)
    @ManyToOne(optional = false)
    protected Site site;

}
