package com.ionic.domain.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 
 * @author André
 * @category Entity
 *
 */
@Entity
@Data
@EqualsAndHashCode
public class Foto implements Serializable 
{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3842479366289837100L;

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	
	/**
	 * 
	 */
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id; 
	
	/**
	 * 
	 */
	@Column(length = 144)
	private String nome;
	
	/**
	 * 
	 */
	@Column(length = 144)
	private String arquivo;
	
	/**
	 * 
	 */
	@Column(length = 144)
	private String descricao;
	
	/**
	 * 
	 */
	@Column(length = 144)
	private String path;
}
