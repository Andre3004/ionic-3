package com.ionic.application.restful;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ionic.domain.entity.Foto;
import com.ionic.domain.service.FotoService;

@RestController
@RequestMapping("foto")
public class FotoRestController 
{

	/*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Service
	/**
	 * 
	 */
	@Autowired
	private FotoService fotoService;
	
	/**
	 * 
	 */
	private static final String APPLICATION_PDF = "application/pdf";
	

	/*-------------------------------------------------------------------
	 * 		 					RESOURCES
	 *-------------------------------------------------------------------*/
	
	@CrossOrigin
	@RequestMapping(value = "/insertFoto", method = RequestMethod.POST)
	public String uploadFile(@RequestBody Foto foto)
	{
		 return this.fotoService.insertFoto(foto).getBody();
    }
	
	@CrossOrigin
	@RequestMapping(value = "/uploadFile/{id}", method = RequestMethod.POST)
	public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable Long id)
	{
		return fotoService.uploadFile(file, id);
    }
	
	@CrossOrigin
	@RequestMapping(value = "/listAllFotos", method = RequestMethod.GET)
	public List<Foto> listAllFotos()
	{
		 return this.fotoService.listAllFotos();
    }
	
}
