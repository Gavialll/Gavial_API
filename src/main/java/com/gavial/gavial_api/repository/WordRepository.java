package com.gavial.gavial_api.repository;


import com.gavial.gavial_api.model.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.NamedQuery;
import java.util.List;

@Repository
public interface WordRepository extends JpaRepository<Word, Long> {
    @Query(value = "SELECT * FROM word order by rand() limit 10", nativeQuery = true)
    List<Word> getTenRandomWords();
}
