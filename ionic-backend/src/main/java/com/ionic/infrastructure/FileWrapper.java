package com.ionic.infrastructure;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

/**
 * 
 * @author André
 * @category Component
 *
 */
@Component
public class FileWrapper 
{	
	/*-------------------------------------------------------------------
	 *                          ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Autowired
	private HttpServletRequest request;
	
	/**
	 * 
	 */
	private String realpath; 
	
	/*-------------------------------------------------------------------
	 *                          BEHAVIORS
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 * @param baseFolder
	 * @param file
	 * @return
	 */
	public String write(String baseFolder, MultipartFile file)
	{
		try 
		{
			this.realpath = request.getServletContext().getRealPath("/" + baseFolder);
			String path = this.realpath + "/" + file.getOriginalFilename();
			file.transferTo(new File(path));
			return path;
			
		} 
		catch (IllegalStateException | IOException e) 
		{
			throw new RuntimeException(e);
		}
	}

	/**
	 * 
	 * @param response
	 * @param id
	 * @param path
	 * @throws IOException
	 */
	public void read(HttpServletResponse response, Long id, String path) throws IOException
	{
		
		String filePath = this.realpath + "/" + path;

		File file = new File(filePath);
		if (!file.exists())
	    {
	        throw new FileNotFoundException("Arquivo não encontrado");
	    }
		
	    InputStream in = new FileInputStream(file);
	    
	    response.setContentType("application/pdf");
	    response.setHeader("Content-Disposition", "attachment; filename=" + file.getName());
	    response.setHeader("Content-Length", String.valueOf(file.length()));
	    FileCopyUtils.copy(in, response.getOutputStream());
		
	}

}
