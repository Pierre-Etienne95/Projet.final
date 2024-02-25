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
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;

    @JsonView({VueSite.class, VueLocal.class})
    protected int quantite;

    @JsonView(VueSite.class)
    @ManyToOne(optional = false)
        protected Local localS;

    @JsonView(VueSite.class)
    @OneToMany(mappedBy = "stock")
    protected List<Consommable> listeConsommable = new ArrayList<>();

}
